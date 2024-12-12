// settingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UserDataType {
  user: {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmation_sent_at: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: { provider: string; providers: [string] };
    user_metadata: {
      email: string;
      email_verified: boolean;
      phone_verified: boolean;
      sub: string;
    };
    identities: [object];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
  };
  session: {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: {
      id: string;
      aud: string;
      role: string;
      email: string;
      email_confirmed_at: string;
      phone: string;
      confirmation_sent_at: string;
      confirmed_at: string;
      last_sign_in_at: string;
      app_metadata: { provider: string; providers: [string] };
      user_metadata: {
        email: string;
        email_verified: boolean;
        phone_verified: boolean;
        sub: string;
      };
      identities: [object];
      created_at: string;
      updated_at: string;
      is_anonymous: boolean;
    };
  };
}

const initialState: UserDataType = {
  user: {
    id: '',
    aud: '',
    role: '',
    email: '',
    email_confirmed_at: '',
    phone: '',
    confirmation_sent_at: '',
    confirmed_at: '',
    last_sign_in_at: '',
    app_metadata: { provider: '', providers: [''] },
    user_metadata: {
      email: '',
      email_verified: false,
      phone_verified: false,
      sub: '',
    },
    identities: [{}],
    created_at: '',
    updated_at: '',
    is_anonymous: false,
  },
  session: {
    access_token: '',
    token_type: '',
    expires_in: 0,
    expires_at: 0,
    refresh_token: '',
    user: {
      id: '',
      aud: '',
      role: '',
      email: '',
      email_confirmed_at: '',
      phone: '',
      confirmation_sent_at: '',
      confirmed_at: '',
      last_sign_in_at: '',
      app_metadata: { provider: '', providers: [''] },
      user_metadata: {
        email: '',
        email_verified: false,
        phone_verified: false,
        sub: '',
      },
      identities: [{}],
      created_at: '',
      updated_at: '',
      is_anonymous: false,
    },
  },
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      state = action.payload;
    }
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
