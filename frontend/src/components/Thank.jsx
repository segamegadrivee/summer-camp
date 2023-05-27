import { useEffect } from "react"

let Thank = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="thank__container container" style={{ textAlign: 'center', marginTop: '150px', marginBottom: '200px' }}>
            <h2>Thank you.
                Your application is pending</h2>
            <h3 style={{ marginTop: '30px' }} >Our camp team will contact you</h3>
        </div>
    )
}

export default Thank;