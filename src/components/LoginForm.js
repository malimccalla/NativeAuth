import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = { email: '' }
  render() {
    return (
      <Card>
        <CardSection />

        <CardSection>
          <Input
            placeholder="welcome@auth.com"
            label="Email:"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
