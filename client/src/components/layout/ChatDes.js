import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import avatar from './avatar.jpg';
const ChatDes = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as='a'>Mohammed</Comment.Author>
        <Comment.Metadata>
          <div>Aujourd'hui at 5:42pm</div>
        </Comment.Metadata>
        <Comment.Text>super bravo #tun</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as='a'>Sami Zitouni</Comment.Author>
        <Comment.Metadata>
          <div>Aujourd'hui at 12:30am</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Cela a été très utile pour mes recherches. Merci aussi!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <Comment.Avatar src={avatar} />
          <Comment.Content>
            <Comment.Author as='a'>Karim XD</Comment.Author>
            <Comment.Metadata>
              <div>Maintenant</div>
            </Comment.Metadata>
            <Comment.Text>Sami tu as toujours si raison</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as='a'>Montassar Madeni</Comment.Author>
        <Comment.Metadata>
          <div>il y a 5 jours</div>
        </Comment.Metadata>
        <Comment.Text>Mec, c'est génial. Merci beaucoup</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default ChatDes