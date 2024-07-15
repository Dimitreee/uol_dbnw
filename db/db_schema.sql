-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

-- Create your tables with SQL commands here (watch out for slight syntactical differences with SQLite vs MySQL)

CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    published BOOLEAN NOT NULL,
    content TEXT NOT NULL,
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    author TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(article_id) REFERENCES articles(id)
);

-- Insert default data (if necessary here)


-- Insert Article 1
INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Impact of Nutrition on Academic Performance',
 0,
 '<h2>Introduction</h2><p>Nutrition plays a vital role in maintaining overall health, but its impact on academic performance is often overlooked. This article reviews a recent study that investigates the relationship between diet quality and students academic achievements.</p><h2>Methodology</h2><p>The study involved 300 high school students from various regions. Participants diets were assessed using food frequency questionnaires, and their academic performance was measured through standardized test scores.</p><h2>Findings</h2><p>Students with balanced diets rich in fruits, vegetables, and whole grains scored higher on standardized tests. Key findings include:</p><ul><li><strong>Mathematics:</strong> A 15% improvement in math scores for students with high-quality diets.</li><li><strong>Reading:</strong> A 12% increase in reading comprehension among students with balanced nutrition.</li><li><strong>Science:</strong> A 10% improvement in science scores for students consuming a varied diet.</li></ul><h2>Discussion</h2><p>The study highlights the importance of balanced nutrition for academic success. Students with higher diet quality exhibited better concentration, memory, and overall cognitive function.</p><h2>Implications</h2><p>Schools and parents should prioritize balanced diets to enhance students academic performance. Implementing nutritional programs and providing healthier food options in schools could be beneficial.</p><h2>Conclusion</h2><p>This study underscores the significant impact of nutrition on academic performance. Ensuring that students receive balanced and nutritious meals can lead to improved educational outcomes.</p><h2>References</h2><ul><li>Johnson, P., & Lee, M. (2023). The Role of Nutrition in Academic Success. Journal of Educational Research.</li><li>Clark, R., & Davis, S. (2022). Diet Quality and Cognitive Function in Adolescents. Nutrition and Health Journal.</li><li>Allen, T., & Baker, J. (2023). The Impact of Food Choices on Learning. Educational Nutrition Review.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Effects of Physical Exercise on Mental Health',
 1,
 '<h2>Introduction</h2><p>Physical exercise is known to improve physical health, but its effects on mental health are equally important. This article reviews a comprehensive study on how regular exercise influences mental well-being.</p><h2>Methodology</h2><p>The study tracked 400 adults over one year, assessing their exercise routines and mental health status through standardized questionnaires and psychological assessments.</p><h2>Findings</h2><p>Regular physical exercise significantly improved mental health outcomes. Key findings include:</p><ul><li><strong>Anxiety:</strong> A 30% reduction in anxiety levels among participants who exercised regularly.</li><li><strong>Depression:</strong> A 25% decrease in depressive symptoms for those engaging in consistent physical activity.</li><li><strong>Stress:</strong> A 20% reduction in stress levels among regular exercisers.</li></ul><h2>Discussion</h2><p>The study demonstrates that physical exercise is a powerful tool for improving mental health. Regular physical activity enhances mood, reduces anxiety and depression, and helps manage stress.</p><h2>Implications</h2><p>Healthcare providers should encourage patients to incorporate regular exercise into their routines as a preventative measure for mental health issues. Public health policies should also promote physical activity to enhance community well-being.</p><h2>Conclusion</h2><p>This study confirms the positive effects of physical exercise on mental health. Encouraging regular physical activity can lead to significant improvements in mental well-being.</p><h2>References</h2><ul><li>Smith, J., & Doe, A. (2023). Exercise and Mental Health: A Longitudinal Study. Journal of Mental Health.</li><li>Brown, L., & White, K. (2022). Physical Activity and Psychological Well-being. Mental Health Journal.</li><li>Green, M., & Black, S. (2023). The Role of Exercise in Reducing Anxiety and Depression. Psychology Today.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Influence of Social Media on Adolescent Mental Health',
 1,
 '<h2>Introduction</h2><p>Social media has become a significant part of adolescents lives, but its impact on mental health is a growing concern. This article reviews a study that examines the relationship between social media usage and mental health outcomes in teenagers.</p><h2>Methodology</h2><p>The study surveyed 1,000 adolescents aged 13-18, collecting data on their social media usage and mental health status through standardized questionnaires.</p><h2>Findings</h2><p>High social media usage was associated with increased levels of anxiety and depression. Key findings include:</p><ul><li><strong>Anxiety:</strong> A 25% increase in anxiety levels among heavy social media users.</li><li><strong>Depression:</strong> A 20% rise in depressive symptoms correlated with prolonged social media use.</li><li><strong>Self-Esteem:</strong> A significant decrease in self-esteem among adolescents with high social media engagement.</li></ul><h2>Discussion</h2><p>The study highlights the potential negative impact of excessive social media use on adolescents mental health. It suggests that limiting screen time could mitigate these effects.</p><h2>Implications</h2><p>Parents and educators should monitor and guide adolescents social media usage to promote healthier mental well-being. Developing strategies to balance online and offline activities is essential.</p><h2>Conclusion</h2><p>This study underscores the need for awareness and intervention to address the mental health challenges posed by excessive social media use among adolescents.</p><h2>References</h2><ul><li>Green, S., & Johnson, L. (2023). Social Media and Teen Mental Health: A Cross-Sectional Study. Journal of Adolescent Health.</li><li>White, R., & Black, A. (2022). The Psychological Impact of Social Media on Adolescents. Mental Health Journal.</li><li>Brown, T., & Davis, P. (2023). Balancing Online and Offline Lives: Strategies for Healthy Social Media Use. Psychology Today.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Role of Art Therapy in Treating PTSD',
 1,
 '<h2>Introduction</h2><p>Art therapy has emerged as an effective treatment for post-traumatic stress disorder (PTSD). This article reviews a study that explores the benefits of art therapy for PTSD patients.</p><h2>Methodology</h2><p>The study included 200 PTSD patients who participated in weekly art therapy sessions for six months. Their symptoms were evaluated using standardized PTSD scales.</p><h2>Findings</h2><p>Art therapy significantly reduced PTSD symptoms. Key findings include:</p><ul><li><strong>Intrusive Thoughts:</strong> A 30% decrease in intrusive thoughts among participants.</li><li><strong>Avoidance:</strong> A 25% reduction in avoidance behaviors.</li><li><strong>Hyperarousal:</strong> A 20% decrease in hyperarousal symptoms.</li></ul><h2>Discussion</h2><p>The study demonstrates that art therapy can be a valuable tool in reducing PTSD symptoms, providing a creative outlet for expression and healing.</p><h2>Implications</h2><p>Mental health professionals should consider incorporating art therapy into treatment plans for PTSD patients. Further research on various art therapy techniques could enhance its effectiveness.</p><h2>Conclusion</h2><p>This study highlights the positive impact of art therapy on PTSD, suggesting it as a complementary treatment option for improving mental health outcomes.</p><h2>References</h2><ul><li>Miller, J., & Smith, P. (2023). Art Therapy for PTSD: A Clinical Trial. Journal of Trauma and Healing.</li><li>Brown, K., & Green, A. (2022). The Healing Power of Art: Art Therapy and PTSD. Mental Health Journal.</li><li>Davis, L., & White, M. (2023). Creative Therapies for Trauma Recovery. Psychology and Therapy Review.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Effectiveness of Online Learning During the COVID-19 Pandemic',
 0,
 '<h2>Introduction</h2><p>The COVID-19 pandemic forced a shift to online learning, raising questions about its effectiveness. This article reviews a study that evaluates the impact of online learning on students academic performance.</p><h2>Methodology</h2><p>The study involved 500 students from various educational levels who switched to online learning during the pandemic. Their academic performance was assessed through standardized tests and surveys.</p><h2>Findings</h2><p>Online learning had mixed effects on academic performance. Key findings include:</p><ul><li><strong>Performance:</strong> A 10% improvement in performance for self-motivated students.</li><li><strong>Engagement:</strong> A 15% decrease in engagement for students who struggled with the online format.</li><li><strong>Access:</strong> A significant disparity in performance based on access to technology and internet connectivity.</p><h2>Discussion</h2><p>The study reveals that online learning can be effective for some students but poses challenges for others, particularly those with limited resources.</p><h2>Implications</h2><p>Educational institutions should develop strategies to support all students, ensuring equitable access to online learning tools and addressing engagement challenges.</p><h2>Conclusion</h2><p>This study highlights the need for adaptive and inclusive online learning environments to improve educational outcomes during and beyond the pandemic.</p><h2>References</h2><ul><li>Johnson, H., & Lee, S. (2023). Online Learning During COVID-19: An Academic Assessment. Journal of Educational Research.</li><li>Brown, R., & Black, T. (2022). The Challenges of Remote Learning. Education Today.</li><li>White, M., & Davis, P. (2023). Strategies for Effective Online Education. Educational Review.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Benefits of Mindfulness Meditation on Stress Reduction',
 1,
 '<h2>Introduction</h2><p>Mindfulness meditation is gaining popularity for its stress-reducing benefits. This article reviews a study that examines the impact of mindfulness meditation on stress levels.</p><h2>Methodology</h2><p>The study included 250 adults who practiced mindfulness meditation daily for eight weeks. Their stress levels were measured using standardized stress assessment tools.</p><h2>Findings</h2><p>Mindfulness meditation significantly reduced stress levels. Key findings include:</p><ul><li><strong>Stress Reduction:</strong> A 35% decrease in stress levels among participants.</li><li><strong>Emotional Regulation:</strong> Improved emotional regulation reported by 40% of participants.</li><li><strong>Well-Being:</strong> Enhanced overall well-being in 30% of participants.</li></ul><h2>Discussion</h2><p>The study demonstrates that mindfulness meditation can be an effective tool for managing stress, improving emotional regulation, and enhancing well-being.</p><h2>Implications</h2><p>Healthcare providers should consider recommending mindfulness meditation as part of stress management programs. Incorporating mindfulness practices in daily routines can improve mental health.</p><h2>Conclusion</h2><p>This study underscores the benefits of mindfulness meditation for stress reduction, suggesting it as a valuable practice for enhancing mental well-being.</p><h2>References</h2><ul><li>Smith, J., & Doe, A. (2023). Mindfulness Meditation and Stress Reduction: A Clinical Study. Journal of Mental Health.</li><li>Brown, L., & White, K. (2022). The Role of Mindfulness in Managing Stress. Mental Health Journal.</li><li>Green, M., & Black, S. (2023). Mindfulness Practices for Emotional Well-Being. Psychology Today.</li></ul>',
 0,
 0);

INSERT INTO articles (title, published, content, views, likes)
VALUES
('The Impact of Music Therapy on Depression',
 1,
 '<h2>Introduction</h2><p>Music therapy is increasingly recognized for its therapeutic benefits in treating depression. This article reviews a study that investigates the effects of music therapy on depressive symptoms.</p><h2>Methodology</h2><p>The study involved 150 adults diagnosed with depression who participated in bi-weekly music therapy sessions for three months. Their symptoms were evaluated using standardized depression scales.</p><h2>Findings</h2><p>Music therapy significantly alleviated depressive symptoms. Key findings include:</p><ul><li><strong>Mood Improvement:</strong> A 40% improvement in mood among participants.</li><li><strong>Symptom Reduction:</strong> A 30% decrease in depressive symptoms.</li><li><strong>Engagement:</strong> Increased engagement and social interaction among participants.</li></ul><h2>Discussion</h2><p>The study highlights the potential of music therapy as an effective treatment for depression, providing emotional relief and enhancing social engagement.</p><h2>Implications</h2><p>Mental health practitioners should consider incorporating music therapy into treatment plans for patients with depression. Further research on different types of music therapy could optimize its benefits.</p><h2>Conclusion</h2><p>This study confirms the positive impact of music therapy on depression, suggesting it as a complementary approach for improving mental health outcomes.</p><h2>References</h2><ul><li>Johnson, P., & Lee, M. (2023). Music Therapy for Depression: A Clinical Trial. Journal of Music Therapy.</li><li>Brown, R., & Davis, S. (2022). The Therapeutic Role of Music in Mental Health. Mental Health Journal.</li><li>Allen, T., & Baker, J. (2023). Music and Mood: Exploring the Healing Power of Music Therapy. Psychology Today.</li></ul>',
 0,
 0);

-- Insert default settings
INSERT INTO settings (title, name)
VALUES
('stdio::blog', 'The Rnd blob');

-- Set up three users

COMMIT;

