import React, {Component} from 'react'
import {showModal, hideModal} from 'actions'
import {connect} from 'react-redux'
import {NewsComponent} from 'news'

class NewsModalContainer extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openArticleModal = this.openArticleModal.bind(this)
  }

  closeModal() {
    this.hideModal()
  }

  openArticleModal(e) {
    const {showModal, article} = this.props
    showModal({
      isOpen: true,
      title: article.Title,
      url: article.URL,
      body: article.Body,
      source: article.Source,
      closeModal: this.closeModal
    }, 'article')
    this.setState({
      isRead: true
    })
  }

  render() {
    const {article, biasFunc} = this.props
    return (
       <NewsComponent biasFunc={biasFunc} article={article}/>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({
      modalProps,
      modalType
    }))
  }
})

export default connect(null, mapDispatchToProps)(NewsModalContainer)
