const form = document.getElementById('cashForm');
const riskCard = document.getElementById('riskCard');
const riskLabel = document.getElementById('riskLabel');
const riskText = document.getElementById('riskText');
const projectedBalance = document.getElementById('projectedBalance');
const cashShortfall = document.getElementById('cashShortfall');
const cashBuffer = document.getElementById('cashBuffer');
const priorityAction = document.getElementById('priorityAction');
const heroCash = document.getElementById('heroCash');
const heroRisk = document.getElementById('heroRisk');
const riskMeter = document.getElementById('riskMeter');
const heroIncoming = document.getElementById('heroIncoming');
const heroOutgoing = document.getElementById('heroOutgoing');

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function getValue(id) {
  const el = document.getElementById(id);
  return Number(el.value || 0);
}

function calculateForecast() {
  const openingCash = getValue('openingCash');
  const incomingCash = getValue('incomingCash');
  const outgoingCash = getValue('outgoingCash');
  const overdueInvoices = getValue('overdueInvoices');
  const minimumReserve = getValue('minimumReserve');
  const taxReserve = getValue('taxReserve');
  const clientConcentration = getValue('clientConcentration');
  const latePaymentRisk = getValue('latePaymentRisk');
  const suspiciousRequest = document.getElementById('suspiciousRequest').value;

  const projected = openingCash + incomingCash - outgoingCash - taxReserve;
  const shortfallAmount = Math.max(minimumReserve - projected, 0);
  const buffer = projected - minimumReserve;
  const pressureScore = Math.min(
    100,
    Math.round(
      (Math.max(overdueInvoices, 0) / 10000) * 30 +
      clientConcentration * 0.4 +
      latePaymentRisk * 0.4 +
      (suspiciousRequest === 'yes' ? 25 : 0)
    )
  );

  let riskLevel = 'Stable';
  let riskTextValue = 'Projected cash is adequate but should be reviewed before large commitments.';
  let action = 'Issue follow-up';
  let riskClass = 'result-positive';

  if (pressureScore >= 75 || suspiciousRequest === 'yes') {
    riskLevel = 'High risk';
    riskTextValue = 'Unusual payment requests or high overdue exposure requires immediate review and verification.';
    action = 'Verify payment';
    riskClass = 'result-danger';
  } else if (pressureScore >= 45 || shortfallAmount > 0) {
    riskLevel = 'Watch closely';
    riskTextValue = 'Projected cash is adequate but sensitive to invoice delays or a repeat cash hit.';
    action = 'Follow up';
    riskClass = 'result-warning';
  }

  riskCard.className = `result-box ${riskClass}`;
  riskLabel.textContent = riskLevel;
  riskText.textContent = riskTextValue;
  projectedBalance.textContent = money(projected);
  cashShortfall.textContent = money(shortfallAmount);
  cashBuffer.textContent = money(buffer);
  priorityAction.textContent = action;

  heroCash.textContent = money(projected);
  heroIncoming.textContent = money(incomingCash);
  heroOutgoing.textContent = money(outgoingCash);

  heroRisk.textContent = riskLevel;
  const meterValue = Math.max(12, pressureScore);
  riskMeter.style.width = `${meterValue}%`;

  if (riskLevel === 'Stable') {
    heroRisk.style.color = 'var(--success)';
  } else if (riskLevel === 'Watch closely') {
    heroRisk.style.color = 'var(--warning)';
  } else {
    heroRisk.style.color = 'var(--danger)';
  }

  return {
    projected,
    shortfallAmount,
    buffer,
    riskLevel,
    action,
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateForecast();
});

calculateForecast();
