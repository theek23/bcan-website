// blog.ts
export const featuredPosts = [
  {
    id: 'myth-busting-breast-cancer',
    title: 'Myth Busting: Common Misconceptions About Breast Cancer',
    excerpt: 'Discover the truth behind 8 common breast cancer myths that may be misleading millions of women.',
    category: 'Awareness',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
    readingTime: '6 min read',
    tags: ['Breast Health', 'Awareness', 'Myths'],
    highlightedQuote: '“Early detection is key, and myths shouldn’t stand in the way of potentially life-saving decisions.”',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150',
      bio: 'Dr. Sarah Chen is a board-certified oncologist specializing in breast cancer research and treatment. With over 15 years of clinical experience, she is dedicated to improving breast cancer outcomes through education and innovative treatment approaches.'
    },
    content: `
      <h2>Addressing Common Breast Cancer Myths</h2>

      <p><strong>In my years as an oncologist specializing in breast cancer</strong>, I’ve encountered numerous misconceptions that not only cause unnecessary fear but also prevent people from taking appropriate preventive measures. This article aims to <em>debunk some of the most common myths</em> surrounding breast cancer.</p>

      <h3>Myth #1: Finding a lump in your breast means you have breast cancer</h3>
      <p>While discovering a lump can be alarming, <strong>most breast lumps are not cancerous</strong>. Conditions like cysts, fibroadenomas, and hormonal changes can all cause lumps. Still, <span class="text-pink-600 font-semibold">early evaluation is crucial</span> if a lump appears.</p>

      <h3>Myth #2: Only women with a family history of breast cancer are at risk</h3>
      <p><strong>Approximately 85% of breast cancers occur in women with no family history.</strong> Risk factors also include age, reproductive history, lifestyle, and certain genetic mutations. <em>Regular screening is essential</em> for all women, not just those with family history.</p>

      <h3>Myth #3: Underwire bras, antiperspirants, and cell phones cause breast cancer</h3>
      <blockquote>“There is no scientific evidence linking these items to breast cancer.”</blockquote>
      <p>This myth continues online, but <strong>multiple studies have confirmed there’s no causal relationship</strong>.</p>

      <h3>Myth #4: Only older women get breast cancer</h3>
      <p>While breast cancer risk increases with age, <strong>it can affect younger women too</strong>. About 9% of new U.S. cases occur in women under 45, often leading to delayed diagnoses.</p>

      <h3>Myth #5: All breast cancers present as a lump that you can feel</h3>
      <p>Many breast cancers don’t form noticeable lumps. <em>Other symptoms may include:</em></p>
      <ul>
        <li>Skin dimpling or irritation</li>
        <li>Nipple discharge (not breast milk)</li>
        <li>Redness or thickening of breast skin</li>
      </ul>
      <p><strong>Mammograms can detect cancers</strong> before physical symptoms arise.</p>

      <h3>Myth #6: Having a mastectomy guarantees breast cancer won't return</h3>
      <p><strong>Mastectomies reduce the risk</strong>, but recurrence is still possible due to microscopic cancer cells. Treatment should be personalized and discussed with your healthcare provider.</p>

      <h3>Myth #7: All breast cancer treatments cause severe side effects</h3>
      <p><em>Modern treatment is much more targeted.</em> Improved surgery, personalized medicine, and supportive care reduce side effects for many women.</p>

      <h3>Myth #8: Breast cancer always requires chemotherapy</h3>
      <p>Not always. <strong>Treatment depends on the type, stage, and biology</strong> of the cancer. Some patients only need surgery or hormone therapy.</p>

      <h2>The Importance of Evidence-Based Information</h2>
      <p>In the digital age, <strong>misinformation spreads quickly</strong>. Rely on trusted sources like:</p>
      <ul>
        <li>American Cancer Society</li>
        <li>National Cancer Institute</li>
        <li>Breast Cancer Research Foundation</li>
      </ul>
      <p>Understanding your risk and seeking timely screening are the <strong>most effective tools</strong> in breast cancer prevention.</p>
      <p class="font-semibold text-pink-600">Let’s replace fear with facts—and support early detection and better outcomes for all.</p>
    `
  },
  {
    id: 'ai-breakthrough',
    title: 'Breakthrough: AI Detection Accuracy Reaches New Heights',
    excerpt: 'Our cutting-edge AI model now achieves 99.9% accuracy in breast cancer early detection—years ahead of traditional methods.',
    category: 'Research',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=2000',
    readingTime: '7 min read',
    tags: ['AI in Healthcare', 'Early Detection', 'Research'],
    highlightedQuote: '“This could potentially revolutionize our approach to breast cancer screening.” — Dr. Jennifer Liu',
    author: {
      name: 'Dr. Michael Roberts',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150',
      bio: 'Dr. Michael Roberts leads our AI research team and has pioneered advancements in medical imaging algorithms. With a PhD in Computer Science and background in medical technology, he bridges the gap between cutting-edge AI and practical healthcare applications.'
    },
    content: `
      <h2>A New Era in Breast Cancer Detection</h2>

      <p><strong>We are thrilled to announce a major milestone</strong> in breast cancer detection: our AI-powered system has reached an astounding <span class="text-pink-600 font-semibold">99.9% accuracy</span> in early detection trials.</p>

      <h3>The Evolution of Our AI System</h3>
      <p>Our journey began five years ago with a bold mission: to <strong>create an AI system that could outperform traditional screening</strong>. Early versions were promising, but we faced challenges with false positives and missed subtle cases.</p>

      <p><em>Then came the breakthrough:</em> a novel neural network that drastically improved how our system interprets breast tissue images—spotting issues invisible to even experienced radiologists.</p>

      <h3>The Clinical Trial Results</h3>
      <ul>
        <li><strong>99.9% accuracy</strong> in identifying malignancies</li>
        <li><strong>97.8% fewer false positives</strong> vs. traditional screening</li>
        <li><strong>18 months earlier detection</strong> on average</li>
        <li>Consistent performance across all breast tissue densities and demographics</li>
      </ul>

      <blockquote>“This system can detect breast cancer at stages that are often missed. It’s a game-changer.” — Dr. Jennifer Liu</blockquote>

      <h3>How the Technology Works</h3>
      <p>Our system doesn’t just look for visible anomalies. It analyzes:</p>
      <ul>
        <li>Tissue patterns</li>
        <li>Minute changes over time</li>
        <li>Contextual markers invisible to the naked eye</li>
      </ul>
      <p>By identifying “pre-signatures” of cancer development, our AI can <strong>intervene up to two years earlier</strong> than traditional methods.</p>

      <h3>Implications for Breast Cancer Screening</h3>
      <ol>
        <li><strong>Earlier detection</strong> = less invasive treatment</li>
        <li><strong>Fewer false positives</strong> = less patient anxiety</li>
        <li><strong>Increased efficiency</strong> for radiologists</li>
        <li><strong>Better access</strong> via telehealth and global deployment</li>
      </ol>

      <h3>What’s Next</h3>
      <ul>
        <li>Regulatory approvals in progress</li>
        <li>Integration into clinical workflows</li>
        <li>Training for radiologists and staff</li>
      </ul>

      <p>We expect early implementation in hospitals by late 2025.</p>

      <h3>The Future of AI in Cancer Detection</h3>
      <p>This advancement is just the beginning. <strong>Our AI models are being adapted for other cancers</strong>—including lung, prostate, and colorectal—with equally promising early results.</p>

      <p class="font-semibold text-pink-600">With AI and human expertise working hand in hand, the future of cancer care looks brighter than ever.</p>
    `

  }
];

export const blogPosts = [
  ...featuredPosts,
  {
    id: 'success-story-emma',
    title: "Emma's Story: Early Detection Saved My Life",
    excerpt: 'Read how a clinical trial and smart technology helped Emma catch breast cancer early—and beat it.',
    category: 'Impact Stories',
    date: 'March 8, 2024',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
    readingTime: '5 min read',
    tags: ['Survivor Story', 'BCan Tech', 'Women’s Health'],
    highlightedQuote: '“You don’t have to wait until you feel something wrong. Early detection can change everything.”',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
      bio: 'Emma Thompson is a breast cancer survivor and advocate for early detection. After her diagnosis at age 37, she has dedicated herself to raising awareness about the importance of regular screening, especially for younger women.'
    },
    content: `
      <h2>The Diagnosis That Changed Everything</h2>

      <p>I never thought breast cancer would be part of my story—especially at age <strong>37</strong>. I had no symptoms. No family history. No reason to worry… until one unexpected screening changed everything.</p>

      <h3>Enrolling in the BCan Trial</h3>
      <p>It started as a favor to a friend who asked me to join a BCan early detection program trial. I figured, why not? I didn’t realize it would <em>save my life</em>.</p>

      <h3>The Call That Changed My Week</h3>
      <p>I received a call on Monday: they’d found something. I assumed it was nothing. But then came the follow-ups—an ultrasound, a biopsy… and finally: <strong>Stage 1 invasive ductal carcinoma</strong>.</p>

      <blockquote>“If not for that trial, my cancer might not have been found for another year or more.”</blockquote>

      <h3>My Treatment Journey</h3>
      <ul>
        <li><strong>Lumpectomy</strong> with clear margins</li>
        <li><strong>Radiation therapy</strong> (no chemo, thanks to early detection!)</li>
        <li><strong>Genetic testing</strong> showed low recurrence risk</li>
      </ul>
      <p>Thanks to early detection, my treatment was manageable—and my outcome was <strong>highly successful</strong>.</p>

      <h3>Three Years Later: Cancer-Free</h3>
      <p>Today, I’m cancer-free. Follow-up screenings are nerve-wracking, but <em>every clear scan is a gift</em>.</p>

      <h3>Becoming an Advocate</h3>
      <p>I now share my story to raise awareness, especially among <strong>younger women</strong>. I’ve helped organize screenings and spoken at women’s health events across the country.</p>

      <h3>The Ripple Effect</h3>
      <p>Because I shared my story:</p>
      <ul>
        <li>5 women in my circle got screened</li>
        <li>My younger sister caught a benign mass early</li>
        <li>My mom now never misses a mammogram</li>
      </ul>

      <h3>Looking Forward</h3>
      <p><strong>Early detection gave me options, time, and hope.</strong> It gave me my life back.</p>
      <p class="font-semibold text-pink-600">If my story helps even one woman get screened early—it’s all been worth it.</p>
    `

  },
  {
    id: 'next-gen-bcan',
    title: 'Introducing the Next Generation BCan Bra',
    excerpt: 'Smarter sensors, longer battery life, and superior comfort—meet the future of wearable early detection.',
    category: 'Product Updates',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
    readingTime: '6 min read',
    tags: ['Product Launch', 'Wearables', 'Innovation'],
    highlightedQuote: '“Early detection doesn’t just save lives—it transforms them.”',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      bio: 'James Wilson is the Chief Product Officer at BCan Technologies. With a background in biomedical engineering and wearable technology development, he leads the team responsible for transforming cutting-edge research into practical, user-friendly devices.'
    },
    content: `
      <h2>Introducing the Next Generation BCan Bra</h2>

      <p><strong>Smarter. Lighter. More accurate.</strong> The new BCan detection bra is here, packed with improvements that transform how women monitor their breast health daily.</p>

      <h3>What’s New?</h3>
      <ul>
        <li><strong>62% lighter sensors</strong></li>
        <li><strong>Adaptive fabric</strong> that moves with your body</li>
        <li><strong>72 sizes</strong> for the perfect fit</li>
        <li><strong>3D body-mapped sensor placement</strong></li>
      </ul>

      <blockquote>“Comfort equals compliance. And compliance equals better outcomes.” — Dr. Amelia Rodriguez</blockquote>

      <h3>Battery Life: 4x Longer</h3>
      <p><strong>72 hours of continuous monitoring</strong> on one charge. Plus:</p>
      <ul>
        <li>Quick charge: 15 mins = 24 hours</li>
        <li>Optional solar case</li>
        <li>Smart power management</li>
      </ul>

      <h3>Enhanced Detection</h3>
      <ul>
        <li><strong>99.9% accurate AI algorithm</strong></li>
        <li>New multi-spectral sensors (5x more data)</li>
        <li>Improved results for dense breast tissue</li>
      </ul>

      <h3>Upgraded Companion App</h3>
      <p>Now includes:</p>
      <ul>
        <li>Wellness recommendations</li>
        <li>Data sharing with your doctor</li>
        <li>Secure community support</li>
      </ul>

      <h3>More Accessible Than Ever</h3>
      <ul>
        <li>20% lower retail price</li>
        <li>Covered by 85% of insurance providers</li>
        <li>Donation programs for underserved women</li>
      </ul>

      <h3>Better for the Planet</h3>
      <ul>
        <li>70% recycled materials</li>
        <li>100% recycled packaging</li>
        <li>Manufactured with 80% renewable energy</li>
      </ul>

      <h3>Available Now</h3>
      <p>Pre-orders are open. Ships from <strong>April 15, 2024</strong>.</p>
      <p class="font-semibold text-pink-600">With smarter technology and a heart for women’s health, the new BCan bra is changing how we fight breast cancer—one comfortable, powerful step at a time.</p>
    `

  }
];