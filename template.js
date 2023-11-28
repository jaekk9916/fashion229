export default ({ markup, css }) => {
    return `...
<div id="root">${markup}</div>
<style id="jss-server-side">${css}</style> 
...`
}
