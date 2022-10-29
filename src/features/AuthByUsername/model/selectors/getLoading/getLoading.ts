import { StateSchema } from 'app/providers/StoreProvider';

export const getLoading = (state: StateSchema) => state?.loginForm?.isLoading ?? false;
