import json
  
f = open('../metrics.json')
data = json.load(f)

acc = data[0]['acc']
precision = data[0]['precision']
recall = data[0]['recall']
tp = data[0]['tp']
tn = data[0]['tn']
fp = data[0]['fp']
fn = data[0]['fn']

f.close()

sensitivity = tp/(tp+fn)
specificity = tn/(tn+fp)
ppv = tp/(tp+fp)
npv = tn/(fn+tn)
f1 = (precision*recall)/(precision+recall)

with open("../calculated_metrics.json", "w") as f:
  json.dump({
    'acc': acc,
    'precision': precision,
    'recall': recall,
    'tp': tp,
    'tn': tn,
    'fp': fp,
    'fn': fn,
    'sensitivity': sensitivity,
    'specificity': specificity,
    'ppv': ppv,
    'npv': npv,
    'f1': f1
  }, f, indent=4)
  
