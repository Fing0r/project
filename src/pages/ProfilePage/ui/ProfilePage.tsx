import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Suspense, useEffect } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useDynamicModule(initialReducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <h1 className="">
            <Suspense fallback={<Loader />}>
                <ProfileCard />
            </Suspense>
            {/* {t('Profile Page')} */}
        </h1>
    );
};

export default ProfilePage;
