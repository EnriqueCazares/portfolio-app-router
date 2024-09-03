


export default function Content({params}) {

    return (
        <div>
            Hello I am Content of: {JSON.stringify(params.id)}
        </div>
    )
}