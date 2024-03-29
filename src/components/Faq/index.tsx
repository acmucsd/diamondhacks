'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './style.module.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

interface FaqProps {
  data: { question: string; answer: string | any }[];
}

const theme = createTheme({
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
});

export default function FAQ({ data }: FaqProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const handleChange =
    (panelIndex: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedIndex(newExpanded ? panelIndex : -1);
    };

  return (
    <ThemeProvider theme={theme}>
      {data.map((questionObject, index) => (
        <Accordion
          disableGutters
          elevation={0}
          expanded={expandedIndex === index}
          onChange={handleChange(index)}
          sx={{
            padding: '1rem',
            borderRadius: '0.75rem !important',
            boxShadow: 'none',
            margin: '20px 0',
            '&.Mui-expanded': {
              margin: 0,
            },
            '&:before': {
              display: 'none',
            },
          }}
          key={questionObject.question}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon className={s.header} />}>
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
              {questionObject.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={s.description}>
            <Typography component="div" sx={{ fontSize: 16 }}>
              <div>{questionObject.answer}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ThemeProvider>
  );
}
