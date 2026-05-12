interface FooterProps {
    footerWrapper: string,

}

export default function Footer ({
    footerWrapper,
}:FooterProps) {
    return <footer className={footerWrapper} >
        <div className="flex justify-evenly w-xl" >
            <ul>
                <li>Redding, CA</li>
                <li>(945) 868-2935</li>
                <li>[EMAIL HERE]</li>
            </ul>
            <div className="flex justify-around w-100" >
                OPENING HOURS
                <br />
                Monday-Friday 4:00pm-9:00pm
                <br />
                Saturday 10:00am-9:00pm
            <form action="">[FORM HERE]</form>
            </div>
        </div>

        <span> &copy; {`${new Date().getFullYear()}, Turn It Up Lessons`} </span>
    </footer>
}