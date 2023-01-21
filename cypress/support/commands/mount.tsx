import { MountOptions } from 'cypress/react';
import { mount } from 'cypress/react18';
import { ReactNode } from 'react';

import {
    componentRenderOptions,
    TestProvider,
} from '@/shared/lib/tests/componentRender/componentRender';

export default function customMount(
    children: ReactNode,
    testOptions?: componentRenderOptions,
    options?: MountOptions,
    rerenderKey?: string,
) {
    return mount(
        <TestProvider options={testOptions ?? {}}>{children}</TestProvider>,
        options,
        rerenderKey,
    );
}
