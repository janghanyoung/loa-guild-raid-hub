export default function RaidsPage() {
  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">레이드 허브</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* 오늘의 공대 */}
        <div className="bg-[#1e293b] p-4 rounded-xl">
          <h2 className="font-semibold mb-2">오늘의 공대</h2>

          <div className="mb-2">
            <p>카멘 하드 1-3</p>
            <p className="text-sm text-gray-400">21:00 / 7 / 8</p>
          </div>

          <div>
            <p>에키드나 노말</p>
            <p className="text-sm text-gray-400">23:00 / 4 / 8</p>
          </div>
        </div>

        {/* 모집중 */}
        <div className="bg-[#1e293b] p-4 rounded-xl">
          <h2 className="font-semibold mb-2">모집중인 레이드</h2>

          <p>베히모스 5 / 16</p>
          <p>아브렐슈드 6 / 8</p>
          <p>상아탑 3 / 4</p>
        </div>
      </div>

      {/* 레이드 목록 */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">레이드 목록</h2>

        <div className="grid grid-cols-5 gap-3">
          {[
            "카멘",
            "에키드나",
            "베히모스",
            "아브렐슈드",
            "일리아칸",
          ].map((raid) => (
            <a
              key={raid}
              href={`/raids/${raid}`}
              className="bg-[#1e293b] p-3 rounded-lg hover:bg-[#334155]"
            >
              {raid}
            </a>
          ))}
        </div>
      </div>

      {/* 공지 */}
      <div>
        <h2 className="font-semibold mb-2">레이드 공지</h2>

        <div className="bg-[#1e293b] p-4 rounded-xl text-sm">
          <p>신규 레이드 업데이트 예정</p>
          <p>보상 구조 변경 안내</p>
        </div>
      </div>
    </div>
  );
}
