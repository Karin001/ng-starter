export const environment = {
  production: true,
  prospectBuilderModel: {
    buildQuote: false,
    buildAcknowledge: false,
    buildOrganizationInfo: false,
    buildFinancialInfo: false,
    buildTradeInfo: false,
    buildPermissiblePurpose: false,
    buildUserSetup: false,
    buildPackageSelection: false,
    buildPaymentOptions: false,
    buildOrderOptions: false,
    buildVerifyOrganizationInfo: false,
    buildDocusignAuthorization: false,
    buildDocusignContract: false
  },
  baseUrl: '',
  restApi: {
    loadBlogList: '/api/blog/bloglist',
    loadBlogContent: '/api/blog/content',
    uploadBlog: '/api/blog/uploadBlog',
    editBlog: '/api/blog/edit',
    addComment: '/api/blog/addComment',
    toggleHeart: '/api/blog/toggleHeart'
  }
};
