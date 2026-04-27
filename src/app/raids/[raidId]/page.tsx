import Link from "next/link";

export default function RaidDetail({ params }: any) {
  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{params.raidId}</h1>

      <div className="bg-[#1e293b] p-4 rounded-xl mb-4">
        <p>권장 레벨: 1610+</p>
        <p>파티 구성: 딜러 6 / 서폿 2</p>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl mb-4">
        <p>공략 영상</p>
        <div className="mt-2 text-sm text-gray-400">
          (영상 자리)
        </div>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <p>공략 내용</p>
      </div>

      <Link href={`/raids/${params.raidId}/edit`}>
        <button className="mt-4 bg-blue-500 px-4 py-2 rounded">
          수정
        </button>
      </Link>
    </div>
  );
}
