import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import {PageError} from 'widgets/PageError';
//import {withTranslation} from "react-i18next";

interface ErrorBoundaryProps {
    //ReactNode - любой реакт компонент
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(/*error*/) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        //if (this.state.hasError) {
        if (hasError) {
            // You can render any custom fallback UI
            //Suspense добавляет чтобы переводы в пэйдж еррор работали
            return <Suspense fallback=''><PageError /></Suspense>;
        }

        //return this.props.children;
        return children;
    }
}

//если прямо тут понадобится использовать переводы - то в классах не работают хуки и вместо них нужно использовать хоки HOC
//хок прокидывает доп пропсы в классовый компонент, например, тут - функцию t
//export default withTranslation()(ErrorBoundary)
