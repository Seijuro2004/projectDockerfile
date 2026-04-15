// ============================================================
// GitHub repo URL (no trailing slash)
// ============================================================
var REPO_URL = 'https://github.com/Seijuro2004/projectDockerfile';

// "path" is relative to repo root. "type" sets the icon. "folder" = true links to tree view.
var members = {
  alegre: {
    name: 'Alegre, Jhon Isaac',
    initials: 'JA',
    prelim: [
      { label: 'HOA 1', path: 'ALEGRE/Prelim/Alegre - Activity 0 - Creating Virtual Machines in Microsoft Azure.pdf', type: 'hoa' },
      { label: 'HOA 2', path: 'ALEGRE/Prelim/Alegre - Activity 2 - SSH Key-Based Authentication and GIT Setup-1.pdf', type: 'hoa' },
      { label: 'HOA 3', path: 'ALEGRE/Prelim/Alegre - Activity 4 - Running Elevated Ad hoc Commands-1.docx.pdf', type: 'hoa' },
      { label: 'HOA 4', path: 'ALEGRE/Prelim/Alegre - Activity 5 - Consolidating Playbook plays.docx.pdf', type: 'hoa' },
      { label: 'Assignment 3.1', path: 'ALEGRE/Prelim/Alegre - Assignment 3.1 _ Creating Ansible Setup.pdf', type: 'assignment' },
      { label: 'Assignment 4.1', path: 'ALEGRE/Prelim/Alegre - Assignment 4.1 _ Setting Up Ansible for Server Management.pdf', type: 'assignment' },
      { label: 'Quiz 5.1', path: 'ALEGRE/Prelim/Alegre - Quiz 5.1.pdf', type: 'quiz' },
      { label: 'Prelim Exam', path: 'ALEGRE/Prelim/Alegre - Prelim Exam Skills.pdf', type: 'exam' }
    ],
    midterm: [
      { label: 'HOA 5', path: 'ALEGRE/Midterm/Alegre - Activity 3 - Install SSH server on CentOS or RHEL 8.docx.pdf', type: 'hoa' },
      { label: 'HOA 6', path: 'ALEGRE/Midterm/Alegre - Activity 6 - Targeting Specific Nodes.docx.pdf', type: 'hoa' },
      { label: 'HOA 7', path: 'ALEGRE/Midterm/Activity 8_ Install, Configure, and Manage Availability Monitoring tools (1).pdf', type: 'hoa' },
      { label: 'Assignment 6.1', path: 'ALEGRE/Midterm/Alegre - Assignment 6.1 _ Ansible Roles.pdf', type: 'assignment' },
      { label: 'Midterm Exam', path: 'ALEGRE/Midterm/Alegre - Midterm Skills Exam - CPE 212 .pdf', type: 'exam' }
    ],
    finals: [
      { label: 'HOA 11.1', path: 'ALEGRE/Final/Group 3 - HoA 11.1.docx (1).pdf', type: 'hoa' },
      { label: 'Quiz 12.1', path: 'ALEGRE/Final/Quiz-12.1.png', type: 'quiz' },
      { label: 'Progress Report', path: 'ALEGRE/Final/Progress Report.pdf', type: 'hoa' }
    ],
    reflection: {
      learned: 'Replace this with your reflection on what you learned.',
      challenges: 'Replace this with the challenges you faced.',
      takeaways: 'Replace this with your key takeaways.'
    }
  },

  roldan: {
    name: 'Roldan, Serge',
    initials: 'SR',
    prelim: [
      { label: 'HOA 1', path: 'ROLDAN/Prelim/Activity 5 - Consolidating Playbook plays.docx.pdf', type: 'hoa' },
      { label: 'Assignment 3.1', path: 'ROLDAN/Prelim/Assignment 3.1 - Sys. Ad. 2.pdf', type: 'assignment' },
      { label: 'Prelim Exam', path: 'ROLDAN/Prelim/prelim_exam_sysad2 (1).pdf', type: 'exam' }
    ],
    midterm: [
      { label: 'HOA 5', path: 'ROLDAN/Midterm/Activity 3 - Install SSH server on CentOS or RHEL 8.docx.pdf', type: 'hoa' },
      { label: 'HOA 6', path: 'ROLDAN/Midterm/HoA 6.1 - SysAd2.docx.pdf', type: 'hoa' },
      { label: 'HOA 7', path: 'ROLDAN/Midterm/LAB 7.1.docx.pdf', type: 'hoa' },
      { label: 'HOA 8', path: 'ROLDAN/Midterm/Activity 8_ Install, Configure, and Manage Availability Monitoring tools (1).docx.pdf', type: 'hoa' },
      { label: 'Midterm Exam', path: 'ROLDAN/Midterm/Midterm Skills Exam - CPE 232 .docx (1).pdf', type: 'exam' }
    ],
    finals: [
      { label: 'HOA 11.1', path: 'ROLDAN/Finals/Group 3 - HoA 11.1.docx (1).pdf', type: 'hoa' },
      { label: 'Progress Report', path: 'ROLDAN/Finals/Progress Report (1).pdf', type: 'hoa' },
      { label: 'Final Exam', path: 'ROLDAN/Finals/Final Exam.pdf', type: 'exam' }
    ],
    reflection: {
      learned: 'Replace this with your reflection on what you learned.',
      challenges: 'Replace this with the challenges you faced.',
      takeaways: 'Replace this with your key takeaways.'
    }
  },

  dazon: {
    name: 'Dazon, Joshua',
    initials: 'JD',
    prelim: [
      { label: 'HOA 1', path: 'DAZON/Prelim HOA/Activity 0 - Creating Virtual Machines in Microsoft Azure (Dazon)-1.pdf', type: 'hoa' },
      { label: 'HOA 2', path: 'DAZON/Prelim HOA/Activity 2 - SSH Key-Based Authentication and GIT Setup-1.pdf', type: 'hoa' },
      { label: 'HOA 3', path: 'DAZON/Prelim HOA/Activity 4 - Running Elevated Ad hoc Commands-1.pdf', type: 'hoa' },
      { label: 'HOA 4', path: 'DAZON/Prelim HOA/Activity 5 - Consolidating Playbook plays.pdf', type: 'hoa' },
      { label: 'HOA 5 (Ansible Setup)', path: 'DAZON/Prelim HOA/CPE232_joshua', type: 'hoa', folder: true },
      { label: 'Prelim Exam', path: 'DAZON/Prelims Exam/Dazon_PrelimExam-main', type: 'exam', folder: true }
    ],
    midterm: [
      { label: 'HOA 6', path: 'DAZON/Midterm HOA/HOA_6', type: 'hoa', folder: true },
      { label: 'HOA 7', path: 'DAZON/Midterm HOA/HOA_7', type: 'hoa', folder: true },
      { label: 'HOA 8', path: 'DAZON/Midterm HOA/HOA_8', type: 'hoa', folder: true },
      { label: 'Activity 6', path: 'DAZON/Midterm HOA/Activity 6 - Targeting Specific Nodes (1).pdf', type: 'hoa' },
      { label: 'Midterm Exam', path: 'DAZON/Midterms Exam/CPE_MIDEXAM_DAZON-main', type: 'exam', folder: true }
    ],
    finals: [
      { label: 'HOA 11.1', path: 'DAZON/Final HOA/Group 3 - HoA 11.1.docx (1).pdf', type: 'hoa' }
    ],
    reflection: {
      learned: 'Replace this with your reflection on what you learned.',
      challenges: 'Replace this with the challenges you faced.',
      takeaways: 'Replace this with your key takeaways.'
    }
  },

  bonita: {
    name: 'Bonita, Kier',
    initials: 'KB',
    prelim: [
      { label: 'HOA 1', path: 'BONITA/PRELIM HOA/Activity 0 - Creating Virtual Machines in Microsoft Azure.pdf', type: 'hoa' },
      { label: 'HOA 2', path: 'BONITA/PRELIM HOA/Activity 2 - SSH Key-Based Authentication and GIT Setup-1.pdf', type: 'hoa' },
      { label: 'HOA 3', path: 'BONITA/PRELIM HOA/Activity 5 - Consolidating Playbook plays.pdf', type: 'hoa' }
    ],
    midterm: [
      { label: 'HOA 5', path: 'BONITA/MIDTERM HOA/Activity 3 - Install SSH server on CentOS or RHEL 8-1.pdf', type: 'hoa' },
      { label: 'HOA 6', path: 'BONITA/MIDTERM HOA/BONITA-Activity 6 - Targeting Specific Nodes (1)-1.pdf', type: 'hoa' },
      { label: 'HOA 7', path: 'BONITA/MIDTERM HOA/Activity 8_ Install, Configure, and Manage Availability Monitoring tools (1).pdf', type: 'hoa' },
      { label: 'Midterm Exam', path: 'BONITA/MIDTERM EXAM/BONITA - Midterm Skills Exam.pdf', type: 'exam' }
    ],
    finals: [
      { label: 'HOA 11.1', path: 'BONITA/FINALS HOA/Group 3 - HoA 11.1.docx.pdf', type: 'hoa' }
    ],
    reflection: {
      learned: 'Replace this with your reflection on what you learned.',
      challenges: 'Replace this with the challenges you faced.',
      takeaways: 'Replace this with your key takeaways.'
    }
  }
};

var icons = {
  hoa: '&#128218;',
  exam: '&#128221;',
  quiz: '&#128203;',
  assignment: '&#128196;'
};

var typeLabels = {
  hoa: 'HOA / Activity',
  exam: 'Exam',
  quiz: 'Quiz',
  assignment: 'Assignment'
};

function buildFileLink(file) {
  var viewType = file.folder ? 'tree' : 'blob';
  var url = REPO_URL + '/' + viewType + '/main/' + encodeURI(file.path);
  var icon = icons[file.type] || '&#128196;';
  var tag = typeLabels[file.type] || '';
  return (
    '<a class="file-card" href="' + url + '" target="_blank" rel="noopener">' +
      '<div class="file-icon">' + icon + '</div>' +
      '<div class="file-info">' +
        '<span class="file-label">' + file.label + '</span>' +
        '<span class="file-tag">' + tag + '</span>' +
      '</div>' +
      '<span class="file-arrow">&#8599;</span>' +
    '</a>'
  );
}

function renderFiles(containerId, files) {
  var container = document.getElementById(containerId);
  if (!files || files.length === 0) {
    container.innerHTML = '<p class="empty-msg">No files uploaded yet.</p>';
    return;
  }
  var html = '';
  for (var i = 0; i < files.length; i++) {
    html += buildFileLink(files[i]);
  }
  container.innerHTML = html;
}

function showPortfolio(key) {
  var member = members[key];
  if (!member) return;

  document.getElementById('landing').classList.add('hidden');
  document.getElementById('portfolio').classList.remove('hidden');

  document.getElementById('bannerAvatar').textContent = member.initials;
  document.getElementById('bannerName').textContent = member.name;

  renderFiles('prelimFiles', member.prelim);
  renderFiles('midtermFiles', member.midterm);
  renderFiles('finalsFiles', member.finals);

  var r = member.reflection;
  document.getElementById('reflectionContent').innerHTML =
    '<div class="reflection-block"><h3>What I Learned</h3><p>' + r.learned + '</p></div>' +
    '<div class="reflection-block"><h3>Challenges I Faced</h3><p>' + r.challenges + '</p></div>' +
    '<div class="reflection-block"><h3>Key Takeaways</h3><p>' + r.takeaways + '</p></div>';

  window.scrollTo(0, 0);
  revealSections();
}

function goHome(e) {
  e.preventDefault();
  document.getElementById('portfolio').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
  document.querySelectorAll('.term-section').forEach(function (s) {
    s.classList.remove('visible');
  });
}

function scrollToSection(e, id) {
  e.preventDefault();
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function revealSections() {
  var sections = document.querySelectorAll('.term-section');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  sections.forEach(function (section, i) {
    section.style.transitionDelay = i * 0.12 + 's';
    observer.observe(section);
  });

  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
}
