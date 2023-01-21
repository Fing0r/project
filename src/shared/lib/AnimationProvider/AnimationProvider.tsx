import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

const getAsyncAnimationModules = async () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

interface AnimationContextProps {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoading?: boolean;
}

const AnimationContext = createContext<AnimationContextProps>({});

const useAnimation = () => {
    return useContext(AnimationContext) as Required<AnimationContextProps>;
};

const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoading(true);
        });
    }, []);

    const defaultValue: AnimationContextProps = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoading,
        }),
        [isLoading],
    );

    return (
        <AnimationContext.Provider value={defaultValue}>
            {children}
        </AnimationContext.Provider>
    );
};

export { AnimationProvider, useAnimation };
