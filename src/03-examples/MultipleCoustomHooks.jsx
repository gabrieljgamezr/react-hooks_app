import { useCounter, useFetch } from '../hooks';
import { Quotes, LoadingQuote } from './components';

export const MultipleCoustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {
                isLoading 
                ? <LoadingQuote /> 
                : <Quotes quote={quote} author={author} />
            }
            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment()}>Next Quote</button>
        </>
    )
}