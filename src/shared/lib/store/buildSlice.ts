import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const buildSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
    const slice = createSlice(options);
    const useActions = () => {
        const dispatch = useDispatch();

        return useMemo<typeof slice.actions>(
            // @ts-ignore
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
};

export { buildSlice };
