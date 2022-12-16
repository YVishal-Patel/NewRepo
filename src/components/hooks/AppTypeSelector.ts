import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, RootState } from '../StoreToolkit';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => appDispatch  = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;