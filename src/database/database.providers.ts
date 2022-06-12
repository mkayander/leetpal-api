import mongoose from 'mongoose';
import { LPAL_MDB_CONNECTION_STRING } from '../constants';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        // useFactory: async (): Promise<typeof mongoose> => mongoose.connect(LPAL_MDB_CONNECTION_STRING),
    },
] as const;
