import React from "react";
export const Right = (props: any) => {
    let value = props.value
    const username = value.substr(0, value.lastIndexOf("]") + 1)
    const message = value.substr(value.lastIndexOf(":") + 1);
    return (
        <>
            <div className="item">
                <div>
                    <div style={{ fontSize: '15px', color: '#ccc', textAlign: 'right' }}>{username}</div>
                    <div style={{ padding: '10px', textAlign: 'right' }}>{message}</div>
                </div>
            </div>
        </>
    )
}
