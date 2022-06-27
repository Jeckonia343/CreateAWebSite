import awardsStyle from './AwardsContainer.module.css'

export default function AwardsContainer() {
  return (
    <div className={awardsStyle.section_awards_container}>
      <div className={awardsStyle.section_awards_play_store}>
        2018 구를 플레이스토어 <br />
        올해의 앱 최우수상 수상
      </div>
      <div className={awardsStyle.section_awards_apple}>
        2018 애플 앱 스토어 <br />
        오늘의 여행앱 선정
      </div>
    </div>
  )
}
