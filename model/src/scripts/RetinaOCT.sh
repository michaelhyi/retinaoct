cd ../

python main.py --target_size 224 --epochs 15 --train_batch_size 100 --val_batch_size 20 --steps_per_epoch 835 --val_steps 48 \
               --model retinaoct --saves_filepath ../saves/retinaoct.h5 \