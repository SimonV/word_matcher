import WordComponent from './WordComponent';

export default function ScreenComponent() {

    return (
        <div className="screenComponent">
            <div className='rightColumn'>
                <WordComponent word='Yo!'/>
            </div>
            <div className='middleColumn'>
                <WordComponent word='YaY!'/>
            </div>
            
        </div>
    )
}
