import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
        <h1>info {props.info}</h1>
    </div>
)
const requireAuthentication = (WrappedComponent) => {
    return(props)=>(
        <div>
            {props.isAuthenticated  && <p>hello</p>}
                <WrappedComponent{...props} />
        </div>
    
    )}
const withAdminWarning =(WrappedComponent)=>{
return (props)=>(
<div>
<p>this is my site</p>
{props.isAdmin && <p>secret</p>}
<WrappedComponent{...props}/>
</div>
)
}

const AdminInfo=withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
//ReactDOM.render(<AdminInfo isAdmin={false} info="yo man"/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="yo man1" />, document.getElementById('app'))