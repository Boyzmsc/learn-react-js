import './App.css';
import { Component } from 'react';

import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'update',
      selected_content_id: 3,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    };
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i += 1;
    }
  }

  getContent() {
    var _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if (this.state.mode === 'read') {
      _title = this.getReadContent().title;
      _desc = this.getReadContent().desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id++;
        var _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState({ contents: _contents });
      }.bind(this)}>
      </CreateContent>;
    }
    else if (this.state.mode === 'update') {
      var _content = this.getReadContent();
      _article = <UpdateContent
        data={_content}
        onSubmit={function (_id, _title, _desc) {
          // state 배열 객체 복사
          var _contents = Array.from(this.state.contents);
          _contents[_id-1].title = _title;
          _contents[_id-1].desc = _desc;
          this.setState({ contents: _contents });
        }.bind(this)}>
      </UpdateContent>;
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>
        </Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></TOC>

        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode
            })
          }.bind(this)}
        ></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
