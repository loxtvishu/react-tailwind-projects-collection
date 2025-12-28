import React from 'react'
import Link from './Link'
import ImageContainer from './ImageContainer'

const SectionFooter = () => {
    return (
        <div className="Section-Footer">
            <div className="left-footer">
                <p>Lorem ipsum dolor sit <br /> amet conse ur ading.</p>
                <div className="image-box">
                    <ImageContainer label="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <ImageContainer label="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <ImageContainer label="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div>
            <div className="right-footer">
                <Link label="Instagram" />
                <Link label="Facebook"/>
                <Link label="Tik Tok" />
            </div>
        </div>
    )
}

export default SectionFooter