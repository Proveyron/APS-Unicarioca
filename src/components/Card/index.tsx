import { useState } from 'react'
import './style.css'

const content: string = '0'

export default function Card({ content }) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div
            className={isOpened ? "card card-opened" : "card"}
            onClick={() => {
                setIsOpened(!isOpened)
            }}
        >
            <div className="content">
                <div className="front">
                    {content.front}
                </div>
                <div className="back">
                    {content.back}
                </div>
            </div>
        </div>
    )
}