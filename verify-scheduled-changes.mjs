const sub = '46ee7f4c-97e1-4086-a645-707b3ea423dc';
const pm = '7a335c8b-11c9-41ca-9985-6250f53ea5ef';
const sk = 'sk_test_avqzek3_HSFGQEQ9R0GNmdz18OwFt9ES';

async function test() {
  console.log('Starting verification script...');
  try {
    const res = await fetch(`http://localhost:3000/api/v1/subscriptions/${sub}/scheduled-changes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sk}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'node_test_' + Date.now()
      },
      body: JSON.stringify({
        new_pricing_model_id: pm,
        scheduled_for: '2025-02-01T00:00:00Z'
      })
    });

    const status = res.status;
    const body = await res.json();
    console.log('Status:', status);
    console.log('Response:', JSON.stringify(body, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
