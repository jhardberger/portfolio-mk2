import React from 'react';

import { Icon, Header, Modal } from 'semantic-ui-react';

const ContactModal = (props) => {
	return(
		<div className='contact'>
			<Modal open={props.showModal} >
				<Modal.Header><h1 className='modal-header'>drOp mE a LinE</h1></Modal.Header>
				<Modal.Content>
					<div className='modal-content'>
						<p>Got a weird question? Looking for a new friend? Want a cool website like this one?</p>
						<p>The best way to reach me is via email:</p>
						<h1 className='black'>john (dOT) hardberger (aT) gmail (dOt) com</h1>
						<br />
						<p>But you can also find me on theses choice platforms:</p>
						<div className='icons'>
							<a href='https://github.com/jhardberger' title='John Hardberger on github'>
								<Icon color='white' size='big' name='github square' />
							</a>
							<a href='https://twitter.com/JHardberger' title='John Hardberger on twitter'>
								<Icon color='white' size='big' name='twitter square' />
							</a>
							<a href='https://www.linkedin.com/in/johnhardberger/' title='John Hardberger on linkedin'>
								<Icon color='white' size='big' name='linkedin' />
							</a>
						</div>
						<br/>
						<a href='javascript:;'><Icon name='remove' onClick={props.handleModal}/></a>
					</div>
				</Modal.Content>
			</Modal>
		</div>
	)
}
export default ContactModal;

