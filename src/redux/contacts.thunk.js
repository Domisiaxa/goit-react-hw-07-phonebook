import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mokaAPI = axios.create({
  baseURL: 'https://644db12b1b4567f4d57907f5.mockapi.io',
});

export const getContactsThunk = createAsyncThunk('contacts', async () => {
  const { data } = await mokaAPI.get('/contacts');
  return data;
});

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delteContact',
  async id => {
    const { data } = await mokaAPI.delete(`/contacts/${id}`);
    return data;
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await mokaAPI.post('/contacts', { ...contact });
    return data;
  }
);
