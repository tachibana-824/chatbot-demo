import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    borderColor: '#FFB549',
    color: '#FFB549',
    fontWeight: 600,
    marginBottom: '8px',
    '&:hover': {
        backgroundColor: '#FFB549',
        color: '#fff',
    },
});

const Answer = (props) => {
    return (
        <StyledButton
            variant="outlined"
            onClick={() => props.select(props.content, props.nextId)}
        >
            {props.content}
        </StyledButton>
    );
};

export default Answer;

