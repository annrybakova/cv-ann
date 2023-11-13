import { setEducationData, setIsLoading, setError, setSkillsData } from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEducationData = () => async (dispatch) => {
    try {   
        setTimeout(async () => {
            try {
                const response = await fetch('/api/education');
                const data = await response.json();

                dispatch(setEducationData(data));
                dispatch(setIsLoading(false));
            } catch (error) {
                console.error('Error:', error);
                dispatch(setIsLoading(false));
                dispatch(setError(error.description));
            }
        }, 2000);
    } catch (error) {
        console.error('Error:', error);
        dispatch(setIsLoading(false));
        dispatch(setError(error.description));
    }
};

export const fetchSkillsData = createAsyncThunk(
    'skills/fetchSkillsData',
    async (_, { dispatch }) => {
    try {   
        fetch('/api/skills')
            .then(response => response.json())
            .then(data => {
                dispatch(setSkillsData(data));
            }) 
    } catch (error) {
        console.error('Error:', error);
    }
});
