import React from 'react'
import colors from '../../../lib/colors'
import ReactGA from 'react-ga'

const Links = () => (
  <ul>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/download')} href="/download" download>
        Download
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/issues')} href="https://github.com/wulkano/kap/issues">
        Issues
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener"
        onClick={() => ReactGA.pageview('/license')}
        href="https://github.com/wulkano/kap/blob/master/LICENSE.md"
      >
        License
      </a>
    </li>
    <style jsx>{`
      a {
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: ${colors.purple};
      }

      a:hover {
        text-decoration: underline;
      }

      li {
        margin-bottom: 12px;
      }
    `}</style>
  </ul>
)

export default Links
