import { setEducationData, setIsLoading, setError, setSkillsData } from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEducationData = () => async (dispatch) => {
    try {   
        dispatch(setIsLoading(false));
        fetch('/api/education')
            .then(response => response.json())
            .then(data => {
                dispatch(setEducationData(data));  
            }) 
    } catch (error) {
        console.error('Error:', error);
        dispatch(setError());
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
