

const CheckedIcon = () => {
    return (
        <div className="contentDetailCheckbox">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
        </div>)
}

const UncheckIcon =() => {
    return (
        <div className="contentDetailCheckbox" >
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/>
            </svg>
        </div>
    )
}


const CheckBoxHover = () => {
    return (
        <div className="checkboxHover">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
            </svg>
        </div>
    )
}


const PipeIcon = () => {
    return (
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M432 288H400L48 288H16l0-64 32 0 352 0 32 0v64z"/>
        </svg>
    )
}
const PlusIcon = () => {
    return (
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z"/>
        </svg>
    )

}

const CloseIcon = () => {
    return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M.896 1.604l14.27 14.27.708-.708L1.604.896l-.708.708zm.458 13.75l14-14-.708-.708-14 14 .708.708z"/>
    </svg>
    )
}


export {
    CheckedIcon,
    UncheckIcon,
    CheckBoxHover,
    PipeIcon,
    PlusIcon,
    CloseIcon
}
