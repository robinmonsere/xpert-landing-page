export const Timeline = () => {
    const releases = [
        {
            version: "v1.0.0",
            date: "February 2025",
            changes: ["Initial beta release"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="releases">
            <div className="container max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Release History</h2>
                <div className="max-w-2xl mx-auto">
                    {releases.map((release, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">{release.version}</h3>
                                <p className="text-gray-600">{release.date}</p>
                            </div>
                            <ul className="list-disc list-inside text-gray-600">
                                {release.changes.map((change, changeIndex) => (
                                    <li key={changeIndex}>{change}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};