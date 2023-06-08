import 'app/styles/index.scss';
import React, {Suspense} from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader/Loader';


export const SuspenseDecorator = (Story:StoryFn) => (
    <Suspense fallback={<Loader />}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
    </Suspense>
);
