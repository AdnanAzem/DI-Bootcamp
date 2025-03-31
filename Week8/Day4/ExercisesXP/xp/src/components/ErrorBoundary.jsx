import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError = (error) => {
        return {hasError:true}
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error=>', error);
        console.log('errorInfo=>', errorInfo);
    }

    render(){
        if(this.state.hasError) return <h2>An error has occured.</h2>
        return this.props.children
    }
}

export default ErrorBoundary