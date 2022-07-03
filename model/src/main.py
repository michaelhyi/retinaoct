from data_prep import data_prep
from build_model import build_model
from compile_model import compile_model
from fit import fit
from plot import plot_accuracy, plot_loss
from save_model import save_model

train, val = data_prep()

model = build_model()
compile_model(model)
history = fit(model,train,val)

plot_accuracy(history)
plot_loss(history)

save_model(model)