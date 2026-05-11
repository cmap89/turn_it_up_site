interface FooterProps {
    footerWrapper: string,

}

export default function Footer ({
    footerWrapper,
}:FooterProps) {
    return <footer className={footerWrapper} >
        <div>
            <ul>
                <li>Redding, CA</li>
                <li>(945) 868-2935</li>
                <li>[EMAIL HERE]</li>
            </ul>
        </div>
        &copy; {`${new Date().getFullYear()}, Turn It Up Lessons`}
    </footer>
}