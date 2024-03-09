import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>HACKsaw@cafe</h1>
        <h2>※本サイトは架空のカフェの紹介サイト兼ブログです</h2>

        <div className="explanation">
          <p>
            ※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明※サイトの説明
          </p>
        </div>
      </div>
    </>
  )
}
