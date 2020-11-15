/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sds: file(absolutePath: { regex: "/SDS.jpg/" }) {
        childImageSharp {
          fixed(width: 120, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            history
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed
  const sds = data?.sds?.childImageSharp?.fixed

  return (
    <>
      <div className="bio">
        {/* {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="bio-avatar"
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        )} */}
        {author?.name && (
          <p>
            {author?.summary || null}
          </p>
        )}
      </div>
      <div className="history">
        {author?.name && (
          <>
            <h4>EXPERIENCE</h4>
            
            <table>
              <tr>
                <td>
                  2018년 07월 - 현재
                </td>
                <td>삼성SDS</td>
                <td>반도체시스템 개발업무 담당</td>
              </tr>
              <tr>
                <td>
                  2017년 12월 - 2018년 05월
                </td>
                <td>[인턴] 스타트업 한비젼</td>
                <td>3D 비젼 알고리즘 개발</td>
              </tr>
              <tr>
                <td>
                  2012년 03월 - 2018년 08월
                </td>
                <td>[학사] 인하대학교</td>
                <td>[전공] 컴퓨터공학</td>
              </tr>
            </table>
          </>
        )}
   </div>
  </>
  )
}

export default Bio
