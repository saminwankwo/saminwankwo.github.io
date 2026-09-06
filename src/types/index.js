/**
 * @typedef {Object} SkillCategory
 * @property {string} icon
 * @property {string} cat
 * @property {SkillTag[]} tags
 */

/**
 * @typedef {Object} SkillTag
 * @property {string} l
 * @property {number} [p]
 */

/**
 * @typedef {Object} Job
 * @property {string} company
 * @property {string} role
 * @property {string} date
 * @property {string} loc
 * @property {boolean} current
 * @property {string[]} tech
 * @property {string[]} bullets
 */

/**
 * @typedef {Object} Project
 * @property {string} num
 * @property {string} cat
 * @property {string} name
 * @property {string} desc
 * @property {string} metric
 * @property {string} [link]
 * @property {string} [github]
 * @property {string} [caseStudyUrl]
 * @property {string[]} [techDetail]
 * @property {boolean} [featured]
 * @property {CaseStudy} [caseStudy]
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string} problem
 * @property {string} solution
 * @property {string} stack
 * @property {string} outcome
 */

/**
 * @typedef {Object} FreelanceClient
 * @property {string} name
 * @property {string} country
 * @property {string} sector
 * @property {string} stack
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} quote
 * @property {string} name
 * @property {string} role
 */

/**
 * @typedef {Object} Article
 * @property {string} tag
 * @property {string} title
 * @property {string} readTime
 * @property {string} href
 */

/**
 * @typedef {Object} HashnodePost
 * @property {string} title
 * @property {string} brief
 * @property {string} slug
 * @property {string} url
 * @property {string} readTime
 * @property {string} date
 * @property {string} tag
 * @property {Object} [coverImage]
 * @property {string} coverImage.url
 */

/**
 * @typedef {Object} GitHubRepo
 * @property {string} name
 * @property {string} description
 * @property {string} html_url
 * @property {string} language
 * @property {number} stargazers_count
 * @property {number} forks_count
 */

/**
 * @typedef {Object} GitHubUser
 * @property {number} public_repos
 * @property {number} followers
 * @property {number} following
 * @property {number} public_gists
 */

export {}
