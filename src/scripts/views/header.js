import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import User from '../models/userModel'
window.User = User

const Header = React.createClass({
	getUser: function(){
		if(User.getCurrentUser()){
			return User.getCurrentUser().email
		} else {
			return "none"
		}
	},
	render: function(){
		return(
			<div className='header'>
				<div className='header-top'>
					<div className='header-title'>
						<h2>Point</h2>
						<h2>Line</h2>
						<h2>Games</h2>
						<img className= 'header-logo' src='images/white-logo.png'/>
					</div>
				</div>
				<div className='header-nav'>
					<nav>
						<a className='link' href="#store">Store</a>
						<a className='link2' href="#about">About Us</a>
						<form className='view-cart' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
						<input type="hidden" name="cmd" value="_s-xclick"/>
						<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAE6+5sG0ZDrZfzW5RR1yQ8l/wKWDjyCesrJRgr9M4pR4CH7Io1qPlbRfMLwk58Z6QegCYUxqaFIlWFHCydKB65MubXY9Wn+9FI/uc7Tds49scKqndAvEu9ZuDcvssHTbNOdjUT7oUYAYAT64KpfbxgWDvRrMLIepN7/dCY75FHCzELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAh/7fYToEs6joAw4uzQbNCY41aP+vayUqs+L0YIPU9+u49X75MmLkCTRVhnzsGCuB4rjKhRPYTOZiMXoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcwMTIyMDMzNjI3WjAjBgkqhkiG9w0BCQQxFgQUMU7gANEWiziLeqL7NFlDI4YvhMcwDQYJKoZIhvcNAQEBBQAEgYCt8kWFbBGirkE0dOXixmDgyN/3b2MLbKAaadYd+X7fYke8f0+byggDDZNiUJyzeKsXEE4hVuxkIpwn92zD94v7RFJxVaMn9bsQ+YVGda7i6kUN+c2JrMdEfOmmbx1GZ6T0lEUi4P7wGfnaVCGj7nJV6rQuLK1aEeb8frrqUUGnlg==-----END PKCS7-----
						"/>
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
						</form>

					</nav>
				</div>
			</div>
		)
	}
})
export default Header