// Updated sendKickoffThankYou — v2
// Links the new Kickoff Discussion Recap section on WG4_Meeting1.html
// so members who missed the meeting can catch up on Q1–Q5 decisions.

function sendKickoffThankYou() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(REG_TAB);
  if (!sheet) throw new Error('Registrations tab not found');
  const data = sheet.getDataRange().getValues();
  const header = data[0].map(String);
  const emailIdx  = header.indexOf('Email');
  const nameIdx   = header.indexOf('Name');
  const statusIdx = header.indexOf('Status');
  if (emailIdx < 0 || nameIdx < 0 || statusIdx < 0) {
    throw new Error('Missing Email/Name/Status columns');
  }

  const platformUrl = 'https://tehreemrehman-hash.github.io/saem-wg4-delphi/';
  const recapUrl    = 'https://tehreemrehman-hash.github.io/saem-wg4-delphi/WG4_Meeting1.html#kickoff-recap';
  const slidesUrl   = 'https://tehreemrehman-hash.github.io/saem-wg4-delphi/WG4_Meeting1_Kickoff.pdf';
  const docUrl      = 'https://docs.google.com/document/d/1eyMKbN_SnETKVMjiZVltzAlBnHLdmZGghUO8VpH0ihQ/edit';
  const accessCode  = 'SAEM-WG4-2026';

  let sent = 0, skipped = 0;
  for (let r = 1; r < data.length; r++) {
    const status = String(data[r][statusIdx] || '').trim().toLowerCase();
    if (status !== 'approved') { skipped++; continue; }
    const email = String(data[r][emailIdx] || '').trim();
    const name  = String(data[r][nameIdx] || '').trim();
    if (!email) { skipped++; continue; }
    const firstName = name.split(/\s+/)[0] || 'colleague';

    const html = `<p>Hi ${firstName},</p>
<p>Thank you for joining the <strong>WG4 kickoff today</strong> — or for sending regrets. Quick recap and what's next.</p>
<p><strong>Meeting 1 recap page</strong> (slides + focused discussion summary):<br>
<a href="${recapUrl}">${recapUrl}</a></p>
<p>I've added the <strong>slide deck</strong> (for review anytime) and a <strong>Kickoff Discussion Recap</strong> section that captures the decisions we made on Q1–Q5 wording and the rationale behind each one. If you couldn't attend, that's the fastest way to get oriented before voting.</p>
<p><strong>Delphi platform:</strong> <a href="${platformUrl}">${platformUrl}</a><br>
<strong>Access code:</strong> ${accessCode}</p>
<p><strong>Discussion doc</strong> (for async comments): <a href="${docUrl}">${docUrl}</a></p>
<p><strong>Before Monday (Round 1 opens Apr 27):</strong></p>
<ol>
  <li>Skim the recap page, especially the Q1–Q5 notes.</li>
  <li>Review the Evidence Brief on the platform (~15 min).</li>
  <li>Plan ~30 min to complete Round 1 between Apr 27 and Apr 29.</li>
</ol>
<p>Meeting 2 (mid-point) is Wed Apr 29, same Zoom link. Calendar invite is not sent — please bookmark.</p>
<p>Reply directly with any questions.</p>
<p>— Tehreem Rehman, MD<br>
Co-lead, Workgroup 4<br>
SAEM 2026 AI Consensus Conference</p>`;

    MailApp.sendEmail({
      to: email,
      subject: 'Thank you — next steps before Monday\'s Round 1 survey',
      htmlBody: html,
      name: 'Tehreem Rehman, MD'
    });
    sent++;
    Utilities.sleep(300);
  }
  Logger.log('sendKickoffThankYou: sent=' + sent + ' skipped=' + skipped);
  return 'sent=' + sent + ' skipped=' + skipped;
}
