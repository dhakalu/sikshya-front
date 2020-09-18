import { Typography, Button, Box, TextField, IconButton } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import React, { useState } from 'react'
import SplitButton from '../../common/breadcrumbs/SplitButton'
import MultipleChoiceQuestionEditor from '../questions/mcq/MultipleChoiceQuestionEditor'
import TextQuestsion from '../questions/text/TextQuestsion'

const questionTypes = ['Multiple Choice Question', 'Free Question']

const AssignmentCreateForm = () => {
  const [sections, setSections] = useState([])

  const addSection = () => {
    setSections([...sections, { title: `Section ${sections.length + 1}`, questions: [] }])
  }

  const addQuestion = (section, index) => {
    const currentSections = [...sections]
    const sectionToAdd = currentSections[section] || { questions: [] }
    currentSections[section].questions = [...sectionToAdd.questions, { type: index }]
    setSections(currentSections)
  }

  const getQuestion = (question) => {
    switch (question.type) {
      case 0:
        return <MultipleChoiceQuestionEditor />
      default:
        return <TextQuestsion />
    }
  }

  // Index of the section whose title is currently being edited
  const [sectionTitleCurrenlyBeingModified, setSectionTitleCurrenlyBeingModified] = useState('')

  const hanldeSectionTitleChange = (sectionIndex, newTitle) => {
    const currentSections = [...sections]
    currentSections[sectionIndex] = { ...currentSections[sectionIndex], title: newTitle }
    setSections(currentSections)
  }

  return <>
    {
      sections.map((section, i) => (
        <Box key={i} border='1px solid #ccc' width='calc(100% - 22px)' padding='10px'>
          <div>

            {
              i === sectionTitleCurrenlyBeingModified ? (
                <TextField
                  label='Section name'
                  fullWidth
                  onChange={(e) => hanldeSectionTitleChange(i, e.target.value)}
                  onBlur={() => setSectionTitleCurrenlyBeingModified('')}
                  value={sections[i].title}
                />
              ) : (
                <Box display='flex' justifyContent='space-between'>
                  <Typography
                    variant='h6'
                    onClick={() => setSectionTitleCurrenlyBeingModified(i)}
                    style={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    {sections[i].title}
                  </Typography>
                  <Box>
                    <IconButton>
                      <Edit onClick={() => setSectionTitleCurrenlyBeingModified(i)} />
                    </IconButton>
                    <IconButton>
                      <Delete color='red' />
                    </IconButton>
                  </Box>
                </Box>
              )
            }
          </div>
          <div>
            {
              ((sections[i] || {}).questions || []).map((q, i) => {
                return getQuestion(q, i)
              })
            }
          </div>
          <div>
            <SplitButton
              label='Add Question'
              onChange={(e, selectedIndex) => addQuestion(i, selectedIndex)}
              options={questionTypes}
            />
          </div>
        </Box>
      ))
    }
    <Button onClick={addSection}>Add Section</Button>

  </>
}

export default AssignmentCreateForm
